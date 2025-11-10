import { useState } from 'react';

const FOODS = [
  { name: 'Egg (whole)', proteinPer100g: 13, caloriesPer100g: 155, pdcaas: 1.0 },
  { name: 'Whey Protein (powder)', proteinPer100g: 80, caloriesPer100g: 400, pdcaas: 1.0 },
  { name: 'Soy (tofu)', proteinPer100g: 8, caloriesPer100g: 76, pdcaas: 0.9 },
  { name: 'Beef (lean)', proteinPer100g: 26, caloriesPer100g: 250, pdcaas: 0.92 },
  { name: 'Rice (white)', proteinPer100g: 2.7, caloriesPer100g: 130, pdcaas: 0.5 },
  { name: 'Lentils (cooked)', proteinPer100g: 9, caloriesPer100g: 116, pdcaas: 0.52 },
  { name: 'Milk (whole)', proteinPer100g: 3.3, caloriesPer100g: 61, pdcaas: 1.0 },
  { name: 'Pea Protein (powder)', proteinPer100g: 80, caloriesPer100g: 400, pdcaas: 0.67 }
];

function round(v, n = 2) {
  return Math.round(v * Math.pow(10, n)) / Math.pow(10, n);
}

const ProteinTester = () => {
  const [foodIndex, setFoodIndex] = useState(0);
  const [servingGrams, setServingGrams] = useState(100);
  const [customProtein, setCustomProtein] = useState('');
  const [targetEffectiveProtein, setTargetEffectiveProtein] = useState(20);

  const food = FOODS[foodIndex];

  // use custom protein values if provided (proteinPer100g, caloriesPer100g, pdcaas)
  const proteinPer100g = customProtein ? parseFloat(customProtein) : food.proteinPer100g;
  const caloriesPer100g = food.caloriesPer100g;
  const pdcaas = food.pdcaas;

  const proteinGrams = (proteinPer100g * servingGrams) / 100;
  const effectiveProtein = proteinGrams * pdcaas;
  const calories = (caloriesPer100g * servingGrams) / 100;
  const effectiveProteinPer100kcal = calories > 0 ? (effectiveProtein / calories) * 100 : 0;

  const servingsNeeded = effectiveProtein > 0 ? targetEffectiveProtein / effectiveProtein : Infinity;

  return (
    <section id="protein-tester" className="protein-tester-section">
      <div className="container">
        <h2 className="headingz">Protein Quality Tester</h2>
        <div className="protein-card">
          <div className="protein-grid">
            <div>
              <label>Choose Food</label>
              <select value={foodIndex} onChange={(e) => setFoodIndex(Number(e.target.value))}>
                {FOODS.map((f, i) => (
                  <option key={f.name} value={i}>{f.name}</option>
                ))}
                <option value={FOODS.length}>-- Custom (enter protein per 100g) --</option>
              </select>

              {Number(foodIndex) === FOODS.length && (
                <div>
                  <label>Protein per 100g</label>
                  <input value={customProtein} onChange={(e) => setCustomProtein(e.target.value)} placeholder="e.g. 12" />
                </div>
              )}

              <label>Serving (grams)</label>
              <input type="number" value={servingGrams} onChange={(e) => setServingGrams(Number(e.target.value))} />

              <label>Target effective protein (g)</label>
              <input type="number" value={targetEffectiveProtein} onChange={(e) => setTargetEffectiveProtein(Number(e.target.value))} />
            </div>

            <div>
              <h3>Results</h3>
              <p><strong>Protein in serving:</strong> {round(proteinGrams)} g</p>
              <p><strong>Protein quality (PDCAAS):</strong> {pdcaas}</p>
              <p><strong>Effective protein (quality-adjusted):</strong> {round(effectiveProtein)} g</p>
              <p><strong>Calories in serving:</strong> {round(calories)} kcal</p>
              <p><strong>Effective protein per 100 kcal:</strong> {round(effectiveProteinPer100kcal)} g</p>

              <h4>Practical advice</h4>
              {isFinite(servingsNeeded) ? (
                <p>To reach <strong>{targetEffectiveProtein} g</strong> of effective protein you need about <strong>{round(servingsNeeded, 2)}</strong> serving(s) of <strong>{food.name}</strong> ({round(servingsNeeded * servingGrams)} g total).</p>
              ) : (
                <p>Enter valid protein values to get advice.</p>
              )}

              <details>
                <summary>Notes</summary>
                <ul>
                  <li>PDCAAS values are approximate. Use them as a guide, not a legal/medical measurement.</li>
                  <li>"Effective protein" = grams protein × PDCAAS (quality-adjusted).</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProteinTester;