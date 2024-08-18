import { useState } from "react"
import useTicTacToe from "../Custom_hooks/useTicTacToe"
import "../CSS_desktop_designs/Tic_tac_toe/Game_board.css"

function Tic_tac_toe()
{
    let {change_player_turn_state, turnState, game_array,winner,reset_click}=useTicTacToe()
    return(
        <div className="container">
            <section className="player_score_status_and_reset">
                {winner ?<p className="result_text">{winner}</p> :<p className="result_text">{turnState===true ? "Player X turn":"Player O turn"}</p>}
                <button id="Reset_button" onClick={reset_click} className="button_tic_tac">Reset</button>
            </section>
            <section className="tic_tac_toe_game_board">
                {game_array.map((_,index)=>{
                    return(
                    <button key={Math.random()} onClick={()=>{change_player_turn_state(index)}} id="game_buttons" className="button_tic_tac">
                        {game_array[index]}
                    </button>
                    )
                })}
            </section>
        </div>
    )
}
export default Tic_tac_toe