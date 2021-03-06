import {RiddlesLevel} from '../common/common';
import {Board, IState, RiddleData} from './gameLogic';

function r(riddleData: RiddleData, board: Board): IState {
  return {
    board: board,
    riddleData: riddleData,
  };
}

export const riddleLevels: RiddlesLevel<IState>[] = [
  {
    levelLocalizeId: 'REVERSI_LEVEL1',
    difficulty: 'EASY',
    maxMovesNum: 1,
    turnIndex: 0,
    riddles: [
      r(
        {
          solutionRow: 0,
          solutionCol: 2,
        },
        [
          ['', '', '', 'W', 'B', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'W', 'B', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 3,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', 'B', 'W', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 2,
          solutionCol: 3,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', 'B', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'B', '', '', '', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', 'B', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 4,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', 'B', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'B', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 5,
          solutionCol: 4,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'B', '', '', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 1,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'W', 'W', 'B', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 5,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', 'B', ''],
          ['', '', '', '', '', 'W', '', ''],
          ['', '', '', '', 'W', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),
    ],
  },
  {
    levelLocalizeId: 'REVERSI_LEVEL2',
    difficulty: 'EASY',
    maxMovesNum: 1,
    turnIndex: 1,
    riddles: [
      r(
        {
          solutionRow: 0,
          solutionCol: 2,
        },
        [
          ['', '', '', 'B', 'W', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'B', 'W', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 3,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', 'W', 'B', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 2,
          solutionCol: 3,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'B', '', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', '', 'B', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', 'W', '', '', ''],
          ['', '', '', 'B', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 4,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'B', '', '', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'B', '', '', '', ''],
          ['', '', '', '', 'W', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 5,
          solutionCol: 4,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', '', '', 'B', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 1,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'B', 'B', 'W', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 5,
          solutionCol: 2,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', 'W', ''],
          ['', '', '', '', '', 'B', '', ''],
          ['', '', '', '', 'B', '', '', ''],
          ['', '', '', 'B', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),
    ],
  },
  {
    levelLocalizeId: 'REVERSI_LEVEL3',
    maxMovesNum: 1,
    difficulty: 'MEDIUM',
    turnIndex: 0,
    riddles: [
      r(
        {
          solutionRow: 3,
          solutionCol: 3,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', 'B', '', '', '', '', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', 'B', 'W', '', '', '', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', 'B', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 3,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', 'B', '', '', 'B', 'B', '', ''],
          ['', '', 'W', '', 'W', '', '', ''],
          ['', 'B', 'W', '', 'W', 'B', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', 'B', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 3,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', 'B', '', '', '', '', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', 'B', 'W', '', 'W', 'W', 'B', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', 'B', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 2,
          solutionCol: 3,
        },
        [
          ['', 'B', 'B', 'B', 'B', 'B', '', ''],
          ['', 'B', 'W', 'W', 'W', '', '', ''],
          ['', 'B', 'W', '', 'W', 'B', '', ''],
          ['', 'B', 'W', 'W', 'W', '', '', ''],
          ['', 'B', '', 'B', 'B', 'B', '', ''],
          ['', 'B', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 3,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', 'B', '', '', '', 'B', '', ''],
          ['', 'B', 'W', '', 'W', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'W', '', 'W', '', '', ''],
          ['', 'B', '', '', '', 'B', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 0,
          solutionCol: 2,
        },
        [
          ['', '', '', 'W', 'B', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'B', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 4,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'B', '', '', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', 'B', 'W', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),
      r(
        {
          solutionRow: 4,
          solutionCol: 1,
        },
        [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'W', 'W', 'B', '', '', ''],
          ['', '', 'W', '', '', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'B', '', '', ''],
        ]
      ),
      r(
        {
          solutionRow: 0,
          solutionCol: 2,
        },
        [
          ['B', 'W', '', 'W', 'B', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['', '', '', '', 'B', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 4,
        },
        [
          ['B', '', '', '', '', '', '', ''],
          ['', 'W', '', 'B', '', '', '', ''],
          ['', '', 'W', 'B', '', '', '', ''],
          ['', '', '', 'W', '', '', '', ''],
          ['B', 'W', 'W', 'W', '', 'W', 'W', 'B'],
          ['', '', 'B', '', '', 'W', '', ''],
          ['', '', '', '', '', 'B', 'B', ''],
          ['', '', '', '', '', 'B', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 0,
          solutionCol: 0,
        },
        [
          ['', 'W', 'W', 'W', 'W', 'W', 'W', 'B'],
          ['W', 'W', 'B', '', '', '', '', ''],
          ['W', '', 'W', '', '', '', '', ''],
          ['W', '', '', 'W', 'B', '', '', ''],
          ['W', '', '', '', 'W', '', '', ''],
          ['W', '', '', '', '', 'W', '', ''],
          ['W', '', '', '', '', 'B', 'W', ''],
          ['B', '', '', '', '', '', '', 'B'],
        ]
      ),
    ],
  },
  {
    levelLocalizeId: 'REVERSI_LEVEL4',
    maxMovesNum: 5,
    difficulty: 'HARD',
    turnIndex: 0,
    riddles: [
      r(
        {
          solutionRow: 3,
          solutionCol: 2,
        },
        [
          ['W', 'W', 'B', 'W', 'W', 'W', 'W', 'B'],
          ['B', 'B', 'B', 'B', 'W', 'B', 'B', 'B'],
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', '', '', 'W', 'W', 'B', 'W'],
          ['W', 'B', '', 'B', 'B', 'B', 'W', 'B'],
          ['B', 'W', '', 'W', 'W', 'W', 'B', 'W'],
          ['B', 'B', '', 'B', 'W', 'B', 'W', 'B'],
          ['W', 'B', 'W', 'W', 'W', 'W', 'W', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 5,
          solutionCol: 6,
        },
        [
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', ''],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', 'B', '', '', 'W'],
          ['B', 'W', 'B', 'W', 'B', '', '', 'W'],
          ['W', 'W', 'B', 'W', 'B', 'W', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ]
      ),
      r(
        {
          solutionRow: 4,
          solutionCol: 2,
        },
        [
          ['W', 'B', 'B', 'W', 'W', 'W', 'W', ''],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', ''],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', ''],
          ['w', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['w', 'W', '', '', 'W', 'W', 'W', 'W'],
          ['w', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
        ]
      ),

      r(
        {
          solutionRow: 0,
          solutionCol: 7,
        },
        [
          ['W', '', '', 'W', 'W', 'W', 'W', ''],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', ''],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', ''],
          ['w', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['w', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['w', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 5,
        },
        [
          ['B', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', '', '', 'W'],
          ['B', 'B', 'W', 'B', 'W', '', '', 'B'],
          ['B', 'W', 'B', 'W', 'B', '', 'W', 'W'],
          ['B', 'B', 'W', 'W', 'B', 'W', 'B', 'W'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['B', 'B', 'W', 'W', 'W', 'W', 'W', 'B'],
          ['W', 'W', 'W', 'W', 'W', 'B', 'W', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 1,
          solutionCol: 7,
        },
        [
          ['B', 'W', 'W', 'W', 'W', 'W', 'W', ''],
          ['B', 'W', 'W', 'W', 'W', 'W', 'W', ''],
          ['B', 'W', 'W', 'W', 'W', 'W', 'W', ''],
          ['w', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['w', 'W', '', 'W', 'W', 'W', 'W', 'W'],
          ['w', 'W', '', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['B', 'B', 'B', 'B', 'B', 'W', 'W', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 0,
        },
        [
          ['B', 'B', 'W', 'W', 'W', 'W', 'W', 'B'],
          ['B', 'B', 'W', 'W', 'B', 'B', 'B', 'W'],
          ['B', 'B', 'W', 'W', 'W', 'B', 'W', 'W'],
          ['', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['', '', 'W', 'W', 'W', 'B', 'W', 'B'],
          ['', '', 'B', 'W', 'W', 'B', 'W', 'W'],
          ['B', 'B', 'W', 'B', 'W', 'B', 'W', 'W'],
          ['W', 'B', 'W', 'B', 'B', 'B', 'B', 'B'],
        ]
      ),

      r(
        {
          solutionRow: 6,
          solutionCol: 1,
        },
        [
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'W', 'B', 'W', 'B', 'W'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['W', '', '', '', '', '', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 2,
        },
        [
          ['W', 'B', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['B', 'w', 'B', 'W', 'W', 'W', 'W', 'B'],
          ['W', 'W', 'W', 'W', 'W', 'B', 'W', 'W'],
          ['B', 'W', '', 'W', 'W', 'W', 'W', 'B'],
          ['W', 'W', '', '', '', 'W', 'W', 'W'],
          ['B', 'W', '', 'W', 'W', 'W', 'W', 'W'],
          ['B', 'W', 'W', 'W', 'W', 'W', 'W', 'B'],
          ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 3,
          solutionCol: 4,
        },
        [
          ['B', 'B', 'W', 'W', 'W', 'W', 'W', 'W'],
          ['B', 'B', 'B', 'W', 'W', 'W', 'W', 'W'],
          ['B', 'B', 'W', 'W', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', '', '', 'W', 'B', 'B'],
          ['W', 'B', 'W', '', '', '', 'W', 'W'],
          ['W', 'W', 'B', 'W', 'W', 'W', 'W', 'W'],
          ['w', 'w', 'W', 'B', 'W', 'W', 'W', 'W'],
          ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
        ]
      ),

      r(
        {
          solutionRow: 6,
          solutionCol: 6,
        },
        [
          ['B', 'B', 'B', 'B', 'W', 'W', 'W', 'W'],
          ['B', 'B', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['W', 'B', 'B', 'W', 'W', 'W', 'W', 'W'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'B', 'W'],
          ['W', 'B', 'B', 'W', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'B'],
          ['B', 'B', 'W', 'B', 'W', 'B', '', ''],
          ['B', 'B', 'B', 'B', 'B', '', '', ''],
        ]
      ),

      r(
        {
          solutionRow: 7,
          solutionCol: 4,
        },
        [
          ['W', 'B', 'W', 'W', 'W', 'W', '', ''],
          ['B', 'B', 'B', 'W', 'W', 'W', 'B', 'B'],
          ['W', 'B', 'W', 'W', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'B'],
          ['W', 'B', 'W', 'W', 'B', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['B', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'B', '', '', '', 'B', 'W', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 7,
          solutionCol: 2,
        },
        [
          ['W', 'B', 'W', 'W', 'W', 'W', 'W', 'B'],
          ['B', 'B', 'B', 'W', 'W', 'W', 'B', 'B'],
          ['W', 'B', 'W', 'W', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'B'],
          ['W', 'B', 'W', 'W', 'B', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['B', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'B', '', '', '', '', '', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 0,
          solutionCol: 3,
        },
        [
          ['W', 'B', 'W', '', 'W', 'W', 'W', 'B'],
          ['B', 'B', '', '', 'B', 'B', 'B', 'B'],
          ['W', 'B', 'W', '', '', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'W', 'B', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'W', 'W'],
          ['B', 'B', 'W', 'B', 'W', 'B', 'W', 'W'],
          ['W', 'B', 'W', 'W', 'W', 'W', 'W', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 4,
          solutionCol: 1,
        },
        [
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['W', '', '', 'W', 'B', '', '', ''],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 1,
          solutionCol: 4,
        },
        [
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', '', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', '', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', 'B', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', '', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', '', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', '', 'W', 'B', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 1,
          solutionCol: 4,
        },
        [
          ['W', 'B', 'W', 'W', 'W', 'W', 'W', ''],
          ['B', 'B', 'B', '', '', 'W', 'B', 'B'],
          ['W', 'B', 'W', '', '', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', 'B', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
        ]
      ),

      r(
        {
          solutionRow: 2,
          solutionCol: 4,
        },
        [
          ['W', 'B', 'W', 'W', 'W', 'W', 'W', 'B'],
          ['B', 'B', 'B', '', '', '', 'B', 'B'],
          ['W', 'B', 'W', '', '', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['W', 'B', 'W', 'W', 'B', 'B', 'W', 'B'],
          ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'W'],
          ['B', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
          ['W', 'B', 'W', 'W', 'W', 'W', 'W', 'W'],
        ]
      ),
    ],
  },
];
