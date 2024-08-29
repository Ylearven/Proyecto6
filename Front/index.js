document.addEventListener('DOMContentLoaded', () => {
  const jjoo$$ = document.querySelector('.jjoo')
  const mostrarmas = (id) => {
    const MasInfo = document.querySelector('.MasInfo')
    MasInfo.innerHTML = ''
    fetch('http://localhost:3000/api/v1/jjoo/' + id)
      .then((res) => res.json())
      .then((jjoo) => {
        for (const jjoos of jjoo.Medallero) {
          MasInfo.innerHTML += `
          <div class=jjoos>
        <h3>Oro: ${jjoos.Oro}</h3>
         <h3>Plata: ${jjoos.Plata}</h3>
          <h3>Bronce: ${jjoos.Bronce}</h3>
           <h3>Diplomas: ${jjoos.Diploma}</h3>
      </div>`
        }
        MasInfo.classList.add('showInfo')
        MasInfo.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
  }
  fetch('http://localhost:3000/api/v1/jjoo')
    .then((res) => res.json())
    .then((jjoo) => {
      console.log('Datos de JJOO:', jjoo)
      let contador = 1
      for (const jjoos of jjoo) {
        const divjjoo = document.createElement('div')
        const nombre = document.createElement('h2')
        const img = document.createElement('img')
        const atletas = document.createElement('h3')
        nombre.textContent = jjoos.Nombre
        img.src = jjoos.Imagen
        atletas.textContent = 'Atletas participantes: ' + jjoos.N_atletas
        divjjoo.className = `jjooPais-caja${contador}`
        divjjoo.addEventListener('click', (evento) => {
          mostrarmas(jjoos._id, divjjoo)
        })
        divjjoo.appendChild(nombre)
        divjjoo.appendChild(img)
        divjjoo.appendChild(atletas)
        jjoo$$.appendChild(divjjoo)
        contador++
      }
    })
})
