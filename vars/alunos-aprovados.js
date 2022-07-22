const  alunos  =  [
	{
		nome : 'João' ,
		nota : 5 ,
		turma : '1B' ,
	} ,
	{
		nome : 'Sófia' ,
		nota : 9 ,
		turma : '1B' ,
	} ,
	{
		nome : 'Paulo' ,
		nota : 6 ,
		turma : '2C' ,
	} ,
    {
		nome : 'Miguel' ,
		nota : 6 ,
		turma : '2C' ,
	} ,
] ;

function alunosaprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosaprovados(alunos, 7))