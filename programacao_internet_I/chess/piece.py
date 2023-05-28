class Piece:
    def __init__(self, color, row, col):
        self.color = color
        self.row = row
        self.col = col

    def __repr__(self):
        return f"{self.color} {self.__class__.__name__}"

    def __str__(self):
        return self.symbol

    def __eq__(self, other):
        return type(self) == type(other) and self.color == other.color

class Pawn(Piece):
    def __init__(self, color, row, col):
        super().__init__(color, row, col)
        self.symbol = "♙" if color == "White" else "♟"

class Rook(Piece):
    def __init__(self, color, row, col):
        super().__init__(color, row, col)
        self.symbol = "♖" if color == "White" else "♜"

class Knight(Piece):
    def __init__(self, color, row, col):
        super().__init__(color, row, col)
        self.symbol = "♘" if color == "White" else "♞"

class Bishop(Piece):
    def __init__(self, color, row, col):
        super().__init__(color, row, col)
        self.symbol = "♗" if color == "White" else "♝"

class Queen(Piece):
    def __init__(self, color, row, col):
        super().__init__(color, row, col)
        self.symbol = "♕" if color == "White" else "♛"

class King(Piece):
    def init(self, color, row, col):
        super().init(color, row, col)
        self.symbol = "♔" if color == "White" else "♚"
