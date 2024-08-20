                    #### BACKUP DE SCRIPTS

# ===================================================================== #
    ## CREATE TABLES ##
# ===================================================================== #
    # MODULO: TICKET -- CREATE TABLE


CREATE TABLE ticket(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo VARCHAR(30),
    data_criacao VARCHAR(50),
    nome_evento VARCHAR(150),
    artista VARCHAR(150),
    data_evento VARCHAR(50),
    local_evento VARCHAR(200),
    horario VARCHAR(50),
    preco VARCHAR(50),
    setor VARCHAR(50),
    disponibilidade boolean,
    restricoes VARCHAR(150),
    beneficios VARCHAR(150),
    entrada_prioritaria boolean
)

# ===================================================================== #
    ## SELECT ALL ##
# ===================================================================== #

SELECT ALL * FROM

