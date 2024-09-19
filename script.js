
        const dt = new Date().toLocaleString();
const jogadas = 0;

document.getElementById("data").innerHTML = dt;


function FuncaoAviso() {
    alert('Este é apenas um painel de avisos!');
}

        let tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let old = 0;

function jogar(bot) {
    if (jogadas < 10) {
        if (tabuleiro[0] != "1") {
            if (tabuleiro[bot] == "0") {
                document.getElementById(bot).innerHTML = "X";
                tabuleiro[bot] = "X";
                old = bot;

                if (VerificaVitoria("X")) {
                    document.getElementById("data").innerHTML = "Você Ganhou!!";
                    tabuleiro[0] = "1";
                } else {
                    RoboJoga(old);
                    if (VerificaVitoria("O")) {
                        document.getElementById("data").innerHTML = "Você Perdeu!!";
                        tabuleiro[0] = "1";
                    }
                }

            } else {
                alert("Escolha outra posição!");
            }
        } else {
            alert("O jogo já acabou!");
        }
    } else {
        document.getElementById("data").innerHTML = "O jogo Empatou!";
        alert("O jogo empatou!");
    }
}
function VerificaVitoria(jogador) {
    if (tabuleiro[1] == jogador & tabuleiro[2] == jogador & tabuleiro[3] == jogador) {
        return true;
    } else if (tabuleiro[4] == jogador & tabuleiro[5] == jogador & tabuleiro[6] == jogador) {
        return true;
    } else if (tabuleiro[7] == jogador & tabuleiro[8] == jogador & tabuleiro[9] == jogador) {
        return true;
    } else if (tabuleiro[1] == jogador & tabuleiro[4] == jogador & tabuleiro[7] == jogador) {
        return true;
    } else if (tabuleiro[2] == jogador & tabuleiro[5] == jogador & tabuleiro[8] == jogador) {
        return true;
    } else if (tabuleiro[3] == jogador & tabuleiro[6] == jogador & tabuleiro[9] == jogador) {
        return true;
    } else if (tabuleiro[1] == jogador & tabuleiro[5] == jogador & tabuleiro[9] == jogador) {
        return true;
    } else if (tabuleiro[3] == jogador & tabuleiro[5] == jogador & tabuleiro[7] == jogador) {
        return true;
    } else {
        return false;
    }
}
        let number = 0;
        let Jogada = 1;
        let old_val = 0;

        function RoboJoga(number) {
            // let val = Math.floor(Math.random() * 8) + 1;
            // number tem o numero da minha jogada
            // e val tem o numero da jogada do robo

            let val = 0;
            // Primeira jogada
            if (number == 1 && Jogada == 1) {
                val = 5;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }

            }
            else if (Jogada == 1 && number == 2) {
                val = 5;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 1 && number == 3) {
                val = 5;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 1 && number == 4) {
                val = 5;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 1 && number == 5) {
                val = 1;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 1 && number == 6) {
                val = 5;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 1 && number == 7) {
                val = 5;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 1 && number == 8) {
                val = 5;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 1 && number == 9) {
                val = 5;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";
                    
                } else {
                    RoboJoga();
                }
            }
            // Segunda jogada
            if (Jogada == 2 && number == 3) {
                val = 7;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 2 && number == 7) {
                val = 3;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 2 && number == 8) {
                val = 2;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 2 && number == 2) {
                val = 8;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            // Terceira jogada
            else if (Jogada == 3 && number != 3) {
                val = 3;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 3 && number == 3) {
                val = 7;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 3 && number != 2) {
                val = 2;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 3 && number == 2) {
                val = 9;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            // Quarta jogada
            else if (Jogada == 4 && number != 7) {
                val = 7 ;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 4 && number == 7) {
                val = 9;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            else if (Jogada == 4 && number == 4) {
                val = 6;
                if (tabuleiro[val] == "0") {
                    document.getElementById(val).innerHTML = "O";       // Jogada realizada
                    tabuleiro[val] = "O";

                } else {
                    RoboJoga();
                }
            }
            Jogada++;
            let old_val = val;
        }   
