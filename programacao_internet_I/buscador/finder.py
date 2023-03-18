from bs4 import BeautifulSoup
from requests import get
from sqlite3 import connect
from datetime import datetime

DB_NAME = 'pages.db'

def create_table():
    conn = connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS pages
                 (url text PRIMARY KEY, html text, updated_at text)''')
    conn.commit()
    conn.close()

def save_page(url, html):
    now = datetime.now()
    timestamp = now.strftime('%Y-%m-%d %H:%M:%S')
    conn = connect(DB_NAME)
    c = conn.cursor()
    c.execute('REPLACE INTO pages (url, html, updated_at) VALUES (?, ?, ?)',
              (url, html, timestamp))
    conn.commit()
    conn.close()

def get_page(url):
    conn = connect(DB_NAME)
    c = conn.cursor()
    c.execute('SELECT html, updated_at FROM pages WHERE url = ?', (url,))
    row = c.fetchone()
    if row is not None:
        html, updated_at = row
        conn.close()
        return html, updated_at
    else:
        conn.close()
        return None, None

def external_links(url):
    html, _ = get_page(url)
    if html is not None:
        soup = BeautifulSoup(html, 'html.parser')
    else:
        response = get(url)
        html = response.content
        soup = BeautifulSoup(html, 'html.parser')
        save_page(url, html)
    links = soup.find_all('a')
    secure_links = sum(1 for link in links if 'https:' in link['href'])
    insecure_links = sum(1 for link in links if 'http:' in link['href'])
    return secure_links, insecure_links

def relevance(url):
    html, _ = get_page(url)
    if html is not None:
        html = str(html)
    else:
        response = get(url)
        html = str(response.content)
        save_page(url, html)
    h1_amount = html.count('<h1') - 1 
    secure_links, insecure_links = external_links(url)
    relevance = secure_links * 2 - insecure_links**2 - h1_amount**2
    return relevance

def search(keyword, url, depth):
    html, updated_at = get_page(url)
    if html is not None:
        print(f"Página encontrada no Banco de Dados, data de acesso em {updated_at}")
        soup = BeautifulSoup(html, 'html.parser')
    else:
        print("Acessando página...")
        response = get(url)
        if response.status_code != 200:
            return response.status_code
        html = response.content
        soup = BeautifulSoup(html, 'html.parser')
        save_page(url, html)

    text = soup.get_text().split(keyword)
    text_parts = []
    links = soup.find_all('a')
    for count in range(len(text)):
        text_parts.append(f'{text[count-1][-20:]} {keyword} {text[count][:20]}')
    if depth > 0:
        for link in links:
            if 'http' in link['href']:
                search(keyword, link['href'], depth-1)

    return text_parts

def main():
    create_table()
    keyword = input('Digite uma palavra-chave: ')
    url = input('Cole a URL: ')
    output = search(keyword, url, 1)
    print(f'-----------------Relatório Final-----------------\nPalavra-chave: {keyword}\nOcorrências: {len(output)-1}\nPontuação: {relevance(url)}')

main()