var BpmnViewer = window.BpmnJS;

var viewer = new BpmnViewer({
  container: '#canvas',
  additionalModules: [
    // Adicionando o modulo responsável pela paleta de elementos
    window.bpmnjsPaletteModule
  ]
});

// Importando o XML do diagrama BPMN
viewer.importXML("./example.xml", function(err) {

  if (err) {
    console.error('could not import BPMN 2.0 diagram', err);
  } else {
    console.log('BPMN 2.0 diagram imported');

    // Recuperando a paleta de elementos
    var palette = viewer.get('palette');

    // Adicionando um novo elemento a paleta de elementos
    palette.registerProvider(function() {
      return {
        // Nome do grupo do elemento
        'group': 'custom',
        // Definindo o elemento personalizado
        'entries': [{
          'id': 'custom',
          'title': 'Custom Task',
          'icon': 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org
