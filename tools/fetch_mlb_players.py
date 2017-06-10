import requests
from bs4 import BeautifulSoup
from string import ascii_lowercase

handedness = {"Right": "R", "Left": "L", "Both": "S"}
root_url = "http://www.baseball-reference.com"

team_abbrev = {
    "San Francisco Giants": "SFG",
    "Los Angeles Dodgers": "LAD",
    "Colorado Rockies": "COL",
    "San Diego Padres": "SDP",
    "Arizona Diamondbacks": "ARI",
    "Chicago Cubs": "CHC",
    "Milwaukee Brewers": "MIL",
    "St. Louis Cardinals": "STL",
    "Cincinnati Reds": "CIN",
    "Pittsburgh Pirates": "PIT",
    "Atlanta Braves": "ATL",
    "Washington Nationals": "WAS",
    "Miami Marlins": "MIA",
    "New York Mets": "NYM",
    "Philadelphia Phillies": "PHI",
    "Los Angeles Angels of Anaheim": "LAA",
    "Oakland Athletics": "OAK",
    "Texas Rangers": "TEX",
    "Seattle Mariners": "SEA",
    "Houston Astros": "HOU",
    "Chicago White Sox": "CHW",
    "Cleveland Indians": "CLE",
    "Kansas City Royals": "KCR",
    "Detroit Tigers": "DET",
    "Minnesota Twins": "MIN",
    "New York Yankees": "NYY",
    "Boston Red Sox": "BOS",
    "Tampa Bay Rays": "TBR",
    "Toronto Blue Jays": "TOR",
    "Baltimore Orioles": "BAL"
}

for c in ascii_lowercase:
    index_page = requests.get(root_url + "/players/" + c)
    soup = BeautifulSoup(index_page.content, "html.parser")
    active_player_links = soup.select("#div_players_ > p > b > a")
    for player_link in active_player_links:
        player_page = requests.get(root_url + player_link['href'])
        player_soup = BeautifulSoup(player_page.content, "html.parser")
        player_meta = player_soup.select("#meta div[itemtype='http://schema.org/Person']")[0]
        name = player_meta.h1.string
        bats = handedness[player_meta.find_all("strong", string="Bats: ")[0].next_sibling.split()[0]]
        throws = handedness[player_meta.find_all("strong", string="Throws: ")[0].next_sibling.split()[0]]
        dob = player_meta.select("span[data-birth]")[0]["data-birth"]
        team_name = player_meta.find_all("strong", string="Team:")
        organization = team_abbrev[team_name[0].find_next_siblings("a")[0].string] if team_name else "n/a"
        player_data = {
            "name": name,
            "organization": organization,
            "batting_hand": bats,
            "throwing_hand": throws,
            "birthday": dob,
            "disabled": False,
            "options": 0,
            "salary": 0
        }
        r = requests.post('http://127.0.0.1:5000/api/players', json = player_data)
