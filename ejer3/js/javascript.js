
function Factura(concepto, importe, iva, cobrada) {
    this.concepto = concepto;
    this.importe = importe;
    this.iva = iva;
    this.cobrada = cobrada;
  }
  
  
  let facturas = [];
  
  
  function calcularIVA(importe, iva) {
    return importe * (iva / 100);
  }
  
  
  function calcularIRPF(importe) {
    return importe * 0.15;
  }
  
  
  function mostrarFacturas() {
    const facturasList = document.getElementById("facturasList");
    facturasList.innerHTML = "";
    
    facturas.forEach(factura => {
      const ivaCalculado = calcularIVA(factura.importe, factura.iva);
      const irpfCalculado = calcularIRPF(factura.importe);
      const total = factura.importe + ivaCalculado - irpfCalculado;
      
      const facturaDiv = document.createElement("div");
      facturaDiv.innerHTML = `
        <p><strong>Concepto:</strong> ${factura.concepto}</p>
        <p><strong>Importe:</strong> ${factura.importe} €</p>
        <p><strong>IVA:</strong> ${ivaCalculado.toFixed(2)} €</p>
        <p><strong>IRPF:</strong> ${irpfCalculado.toFixed(2)} €</p>
        <p><strong>tipo iva:</strong> ${factura.iva}%</p>
        <p><strong>cobrada:</strong> ${factura.cobrada}</p>
        <hr>
      `;
      facturasList.appendChild(facturaDiv);
    });
  }
  
 
  function altaFactura() {
    const concepto = document.getElementById("concepto").value;
    const importe = parseFloat(document.getElementById("importe").value);
    const iva = parseInt(document.getElementById("iva").value);
    const cobrada = document.getElementById("cobrada").checked;
    
    const nuevaFactura = new Factura(concepto, importe, iva, cobrada);
    facturas.push(nuevaFactura);
    
    mostrarFacturas();
  }
  
 
  function guardarFacturas() {
    localStorage.setItem("facturas", JSON.stringify(facturas));
  }
  
 
  window.onload = function() {
    const facturasGuardadas = JSON.parse(localStorage.getItem("facturas"));
    if (facturasGuardadas) {
      facturas = facturasGuardadas;
      mostrarFacturas();
    }
  };
  