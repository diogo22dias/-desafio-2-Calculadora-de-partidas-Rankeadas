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

let SaldoDeVitorias = soma(10,1)
       
		let nomeDoHeroi= ("Rei da velocidade")
		let nivel =("Ferro Bronze prata ouro diamante Lendario imortal")
		
        
        function soma(vitoria,derrota){
        let SaldoDeVitorias = (vitoria - derrota)
        		
        console.log("O Herói tem de saldo de **" + SaldoDeVitorias + "** está no nível de **nivel**")

        }






























