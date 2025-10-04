

document.querySelector('button').addEventListener('click', getNiveau)

async function getNiveau(){ 
    const nomNiveau = document.querySelector('input').value
    const res= await fetch( 'http://localhost:8000/niveaux/'+ nomNiveau )
    const data= await res.json()  
    console.log(data)
    document.querySelector('h2').innerText = data.age         
}
