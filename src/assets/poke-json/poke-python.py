import requests
import json

def obter_id_pokemon(url):
    return int(url.rstrip('/').split('/')[-1])

def obter_informacoes_pokemon(url):
    resposta = requests.get(url)

    if resposta.status_code == 200:
        dados_pokemon = resposta.json()

        informacoes_pokemon = {
            'id': obter_id_pokemon(url),
            'nome': dados_pokemon['name'],
            'svg_url': dados_pokemon['sprites']['other']['dream_world']['front_default'],
            'tipo': [tipo['type']['name'] for tipo in dados_pokemon['types']],
            'atributos': {
                'tamanho': dados_pokemon['height'],
                'peso': dados_pokemon['weight'],
                'habilidades': [habilidade['ability']['name'] for habilidade in dados_pokemon['abilities']]
            },
            'fraqueza': [fraqueza['type']['name'] for fraqueza in dados_pokemon['types']],
            'status': {
                'hp': dados_pokemon['stats'][0]['base_stat'],
                'velocidade': dados_pokemon['stats'][5]['base_stat'],
                'ataque': dados_pokemon['stats'][4]['base_stat'],
                'defesa': dados_pokemon['stats'][3]['base_stat'],
                'ataque_especial': dados_pokemon['stats'][2]['base_stat'],
                'defesa_especial': dados_pokemon['stats'][1]['base_stat'],
            }
        }

        return informacoes_pokemon
    else:
        print(f"Erro ao obter informações do Pokémon. Código de status: {resposta.status_code}")
        return None

def salvar_json(informacoes, nome_arquivo):
    with open(nome_arquivo, 'a') as arquivo:
        json.dump(informacoes, arquivo, indent=2)
        arquivo.write(",\n")
    print(f"As informações do Pokémon foram salvas no arquivo {nome_arquivo}")

if __name__ == "__main__":
    url_lista_pokemons = "https://pokeapi.co/api/v2/pokemon/?limit=1320"
    resposta_lista = requests.get(url_lista_pokemons)

    if resposta_lista.status_code == 200:
        dados_lista = resposta_lista.json()
        todos_os_pokemons = []

        for pokemon in dados_lista['results']:
            informacoes_pokemon = obter_informacoes_pokemon(pokemon['url'])
            if informacoes_pokemon:
                salvar_json(informacoes_pokemon, "poke_infos.json")
                print(f"Pokémon {informacoes_pokemon['nome']} (ID: {informacoes_pokemon['id']}) salvo!")

        print("Todos os Pokémon foram salvos!")
    else:
        print(f"Erro ao obter a lista de Pokémon. Código de status: {resposta_lista.status_code}")
