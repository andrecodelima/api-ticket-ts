                    #### BACKUP DE SCRIPTS

# ===================================================================== #
    ## CREATE TABLES ##
# ===================================================================== #
    # MODULO: TICKET -- CREATE TABLE


CREATE TABLE ticket(
    
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT,
    data_criacao TEXT,
    nome_evento TEXT,
    artista TEXT,
    data_evento TEXT,
    local_evento TEXT,
    horario TEXT,
    preco REAL,
    setor TEXT,
    disponibilidade INTEGER,
    restricoes TEXT,
    beneficios TEXT,
    entrada_prioritaria INTEGER
)

# ===================================================================== #
    ## SELECT ALL ##
# ===================================================================== #

SELECT ALL * FROM

