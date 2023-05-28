def parse_position(position):
#Parses a position string in the format "a1" and returns its row and column as 0-indexed integers
    col = ord(position[0]) - ord('a')
    row = int(position[1:]) - 1
    return row, col

def format_position(row, col):
    """
    Formats a row and column as a position string in the format "a1"
    """
    position = chr(col + ord('a')) + str(row + 1)
    return position