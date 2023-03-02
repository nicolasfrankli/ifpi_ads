from bs4 import BeautifulSoup 
import requests
"""response = requests.get('https://www.mppi.mp.br/internet/', 'alunos')"""
import requests_cache

# Configura o cache para o Requests
requests_cache.install_cache('web_cache')

def search(keyword, url, depth):

    results = []
    response = requests.get(url)
    
    soup = BeautifulSoup(response.content, 'html.parser')
    text = soup.get_text()

    if keyword in text:
        start_index = max(text.index(keyword) - 20, 0)
        end_index = min(text.index(keyword) + len(keyword) + 20, len(text))
        result =  text[start_index:end_index]
        results.append(result)

    if depth > 0:
        links = soup.find_all('a')
        for link in links:
            href = link.get('href')
            if href.startswith('http'):
                results += search(keyword, href, depth - 1)

    return results


print(search('Entenda','https://g4educacao.com/portal/o-que-e-blockchain', 0))