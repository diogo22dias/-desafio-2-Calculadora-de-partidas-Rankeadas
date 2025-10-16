//# 2️⃣ Calculadora de partidas Rankeadas

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

let SaldoDeVitorias = saldo(147,32)
let nomeDoHeroi= ("Mr Rei da velocidade")
let niveis =("Ferro Bronze prata ouro diamante Lendario imortal")
let nivel = niveis.split (" ");
        
           
         function saldo(vitoria,derrota){
            let saldo = (vitoria - derrota)
            return saldo;          
				}
            
            function saberNivel (saldo){
            
				if  (saldo <= 10) {
                return 0;
                } else if (saldo >= 11 && saldo <= 20){
                return 1;
                } else if ( saldo >= 21 && saldo <=50){
                return 2;
                } else if ( saldo >= 51 && saldo <=80){
                return 3;
                } else if ( saldo >= 81 && saldo <=90){
                return 4;
                } else if ( saldo >= 91 && saldo <=100){
                return 5;
                } else if ( saldo >= 101){
                return 6;
                }  
                }
                
                let nivelObtido = saberNivel (SaldoDeVitorias)
                let nivelDoHeroi = nivel[nivelObtido]
            

        console.log("O Herói " + nomeDoHeroi + " tem de saldo de **" + SaldoDeVitorias + "** está no nível de **" + nivel[nivelObtido] + " **" )
        
        



