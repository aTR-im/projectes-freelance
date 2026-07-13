function classificaNota(nota) {
  if (nota >= 90) return "A";
  if (nota >= 70) return "B";
  if (nota >= 50) return "C";
  return "Suspès";
}

console.log(classificaNota(95)); // hauria de sortir A
console.log(classificaNota(72)); // hauria de sortir B
console.log(classificaNota(55)); // hauria de sortir C
console.log(classificaNota(30)); // hauria de sortir Suspès
console.log(classificaNota(50)); // hauria de ser C
