from board import Board
from player import Player

class Game:
    def __init__(self):
        self.board = Board()
        self.players = [Player("Nicolas","White"), Player("Italo","Black")]
        self.current_player = self.players[0]

    def play(self):
        while not self.board.is_game_over():
            print(self.board)
            move = self.current_player.make_move(self.board)
            self.board.move_piece(move)
            self.current_player = self.players[1] if self.current_player == self.players[0] else self.players[0]
        print(self.board)
        print("Game over!")
    
    def is_game_over(self):
        # TODO: Implement game over logic
        return False

    def switch_players(self):
        if self.current_player == self.players[0]:
            self.current_player = self.players[1]
        else:
            self.current_player = self.players[0]

"""class Game:
    def __init__(self):
        self.board = Board()
        self.players = [Player("White"), Player("Black")]
        self.current_player = self.players[0]

    def play(self):
        while not self.board.is_game_over():
            print(self.board)
            move = self.current_player.make_move(self.board)
            self.board.move_piece(move)
            self.current_player = self.players[1] if self.current_player == self.players[0] else self.players[0]
        print(self.board)
        print("Game over!")"""