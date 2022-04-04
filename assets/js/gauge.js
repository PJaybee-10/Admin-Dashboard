
const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )} kWh/Sqft`;
}

setGaugeValue(gaugeElement, 0.47);

const gauge2Element = document.querySelector(".gauge2");

function setGaugeValue2(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill2").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover2").textContent = `${Math.round(
    value * 100
  )} kWh/Sqft`;
}

setGaugeValue2(gauge2Element, 0.60);

const gauge3Element = document.querySelector(".gauge3");

function setGaugeValue3(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill3").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover3").textContent = `${Math.round(
    value * 100
  )} kWh/Sqft`;
}

setGaugeValue3(gauge3Element, 0.80);
