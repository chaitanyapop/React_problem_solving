import { useState } from "react";
function useTicTacToe()
{
    let [turnState, setTurnState]=useState(true)
    let [game_array,setGameArray]=useState(new Array(9).fill(null))
    let win_array_combination=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let [winner,setWinner]=useState(undefined)
    function game_board_logic()
    {
        for(let i=0;i<win_array_combination.length;i++)
        {
            if(game_array[win_array_combination[i][0]]==="X" && game_array[win_array_combination[i][1]]==="X" && game_array[win_array_combination[i][2]]==="X")
            {
                return "Winner is X"
            }
            else if(game_array[win_array_combination[i][0]]==="O" && game_array[win_array_combination[i][1]]==="O" && game_array[win_array_combination[i][2]]==="O")
            {
                return "Winner is O"

            }
            else if(game_array.includes(null)===false)
            {
                return "Match is draw"
            }
        }
    }
    function change_player_turn_state(index)
    {
        let new_array=game_array
        if(winner)
        {
            return
        }
        else if(turnState===true && new_array[index]===null)
        {
            new_array[index]="X"
            setGameArray(new_array)
            setTurnState(!turnState)
        }
        else if(turnState===false && new_array[index]===null)
        {
            new_array[index]="O"
            setGameArray(new_array)
            setTurnState(!turnState)
        } 
        let winner_result=game_board_logic()
        setWinner(winner_result)
    }
    function reset_click()
    {
        setGameArray(new Array(9).fill(null))
        setWinner(undefined)
    }

    return {change_player_turn_state, turnState, game_array,winner,reset_click}
}
export default useTicTacToe