class Player:
    def __init__(self, name, color):
        self.name = name
        self.color = color
        self.is_in_check = False

    def make_move(self, board):
        valid_move = False
        while not valid_move:
            move_input = input(f"{self.name}, make your move (e.g. 'e2 e4'): ")
            try:
                move = Move.from_input(move_input)
                if move in board.get_valid_moves(self.color):
                    valid_move = True
                else:
                    print("Invalid move. Please try again.")
            except ValueError:
                print("Invalid input. Please try again.")
        board.move_piece(move)

    def __str__(self):
        return f"{self.color} player: {self.name}"
