from bs4 import BeautifulSoup 
import requests
import requests_cache

requests_cache.install_cache('web_cache')

def search(keyword, url, depth):

    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    links = []
    results = []
    text = soup.get_text()
    references = 0

    if keyword in text:
        start_index = max(text.index(keyword) - 20, 0)
        end_index = min(text.index(keyword) + len(keyword) + 20, len(text))
        result = text[start_index:end_index]
        results.append(result)
      
    count = 0 
    if depth > 0:
        links = soup.find_all('a', href=True)
        for link in links:
            url = link.get('href')
            if url.startswith('http'):
                if url in link:
                    references += 1
                phrase = search(keyword, url, depth -1)
                results.append(phrase)
                if len(phrase) != 0:
                    print(f'{url} -> {phrase}')
            #    count+=1
        
    return results

output = search('Gestão','https://g4educacao.com/portal/o-que-e-blockchain', 1)

print('\n-----------------Relatório Final-----------------\n')
print(f'Trecho do texto contento a palavra: {output[0]}')