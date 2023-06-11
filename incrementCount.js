module.exports = (data, objectName) => {

  // Realizamos um find para encontrar o primeiro objeto no array com o dado nome
  const objectToUpdate = data.find(obj => obj.name === objectName);

  if (objectToUpdate) {
    // Incrementando o count no usuario encontrado
    objectToUpdate.count++;
  } else {
    console.log('User not found');
  }
}