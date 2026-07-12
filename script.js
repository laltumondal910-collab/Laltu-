let allElements = elements;
let filteredElements = [...allElements];

const periodicTable = document.getElementById('periodicTable');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const modal = document.getElementById('modal');
const elementDetails = document.getElementById('elementDetails');
const closeBtn = document.querySelector('.close');

// Element descriptions
const elementDescriptions = {
    1: "Hydrogen is the lightest and most abundant element in the universe. It forms the sun and makes up about 75% of all normal matter. Used in fuel cells, rocket fuel, and the production of ammonia.",
    2: "Helium is a noble gas with the lowest boiling point of any element. It is used in balloons, deep-sea diving equipment, and as a coolant for superconducting magnets in MRI machines.",
    3: "Lithium is the lightest metal and is used in rechargeable batteries, psychiatric medications, and nuclear weapons. It's essential for modern electronics and energy storage.",
    4: "Beryllium is a hard, lightweight metal used in aerospace, electronics, and nuclear applications. It is toxic when inhaled and requires special handling in industrial settings.",
    5: "Boron is a metalloid essential for plant growth and used in glass manufacturing, detergents, and nuclear control rods. It plays an important role in various industrial processes.",
    6: "Carbon is the basis of all organic life and forms the backbone of all biological molecules. It exists in many forms including diamond, graphite, and recently discovered graphene.",
    7: "Nitrogen makes up about 78% of Earth's atmosphere and is essential for all living organisms. It is used in fertilizers, explosives, and as an inert atmosphere in food packaging.",
    8: "Oxygen is essential for respiration in most organisms and makes up about 21% of Earth's atmosphere. It is highly reactive and forms compounds with nearly every element.",
    9: "Fluorine is the most electronegative and reactive of all elements. It is used in uranium enrichment, refrigerants, and toothpaste as a cavity-preventative agent.",
    10: "Neon is a noble gas known for its bright red/orange glow in electric discharge tubes. It is used in advertising signs, high-voltage indicators, and plasma screens.",
    11: "Sodium is a highly reactive alkali metal essential for nerve and muscle function. It is commonly found in table salt and plays a crucial role in maintaining body fluid balance.",
    12: "Magnesium is essential for all living organisms, involved in over 300 biochemical reactions. It is used in lightweight alloys, fireworks, and as a dietary supplement.",
    13: "Aluminum is the most abundant metal in Earth's crust and the third most abundant element overall. It is highly resistant to corrosion and widely used in packaging, construction, and aviation.",
    14: "Silicon is the second most abundant element on Earth and is a key component of sand and rock. It is fundamental to the semiconductor industry and computer technology.",
    15: "Phosphorus is essential for life and is a key component of bones and teeth. It is used in fertilizers, detergents, and flame retardants.",
    16: "Sulfur forms part of important amino acids and proteins in living organisms. It is used in fertilizer production, chemical manufacturing, and matches.",
    17: "Chlorine is a highly toxic gas but essential for water purification and disinfection. It is also used in the production of many important chemicals and plastics.",
    18: "Argon is a noble gas that makes up about 0.93% of Earth's atmosphere. It is used in welding, as a protective gas in metal production, and in light bulbs.",
    19: "Potassium is essential for all living cells and is important for nerve transmission and muscle contraction. It is used in fertilizers and various industrial applications.",
    20: "Calcium is the most abundant mineral in the body and is essential for strong bones and teeth. It is used in construction materials, cement, and as a dietary supplement.",
    21: "Scandium is a rare transition metal used in aerospace alloys and high-intensity discharge lamps. It is often obtained as a byproduct of uranium mining.",
    22: "Titanium is a strong, lightweight metal resistant to corrosion. It is used in aerospace, medical implants, and high-performance sporting equipment.",
    23: "Vanadium is used in alloy steels and as a catalyst in chemical production. It is also being studied for use in high-energy batteries.",
    24: "Chromium is known for its hardness and corrosion resistance. It is used in stainless steel, electroplating, and as a tanning agent in leather production.",
    25: "Manganese is essential for bone development and metabolism. It is used in steel production, batteries, and as a catalyst in chemical reactions.",
    26: "Iron is the most abundant transition metal and essential for oxygen transport in blood via hemoglobin. It is the basis of steel production and countless industrial applications.",
    27: "Cobalt is used in pigments, high-strength alloys, and as a catalyst. It is essential for vitamin B12 synthesis in living organisms.",
    28: "Nickel is used in stainless steel, batteries, and plating. It is resistant to corrosion and is important in the production of coins and jewelry.",
    29: "Copper is an excellent conductor of heat and electricity. It is used in electrical wiring, plumbing, and is an essential nutrient for living organisms.",
    30: "Zinc is essential for immune function and wound healing in living organisms. It is used in galvanizing steel, brass production, and as a pharmaceutical supplement.",
    31: "Gallium is used in semiconductor and photovoltaic devices. It is crucial for solar panels and integrated circuits in modern electronics.",
    32: "Germanium is a semiconductor used in transistors and photovoltaic devices. It is important in fiber optics and thermal imaging equipment.",
    33: "Arsenic is a toxic element but is used in semiconductors, photovoltaics, and was historically used in pesticides. High concentrations in drinking water are a health concern.",
    34: "Selenium is essential for immune function and thyroid health. It is used in photocells, electronics, and as a dietary supplement.",
    35: "Bromine is a toxic liquid element used in flame retardants, water purification, and photographic processes. It can cause serious burns on skin contact.",
    36: "Krypton is a noble gas used in high-performance light bulbs and specialized applications. It is about 50 times more effective as an insulator than air.",
    37: "Rubidium is used in vacuum tubes, photomultiplier tubes, and as a catalyst. It is highly reactive and must be stored under mineral oil or argon.",
    38: "Strontium is used in fireworks to produce red color. It is also used in medical imaging and as a treatment for osteoporosis.",
    39: "Yttrium is used in alloys and as a dopant in superconductors and laser crystals. It is important in phosphors for color television tubes.",
    40: "Zirconium is highly resistant to corrosion and is used in nuclear reactors and dental implants. It is also used in high-performance alloys.",
    41: "Niobium is used in superconductors and specialized alloys. It remains stable at high temperatures and is important in aerospace applications.",
    42: "Molybdenum is used in alloys and as a catalyst in petroleum refining. It is essential for nitrogen fixation in plants.",
    43: "Technetium was the first element to be artificially produced. It is used in medical imaging and is radioactive with no stable isotopes.",
    44: "Ruthenium is used in alloys, electronics, and as a catalyst. It is one of the rarest elements and is important in chemical synthesis.",
    45: "Rhodium is used as a catalyst in chemical reactions and in catalytic converters for vehicles. It is one of the most expensive precious metals.",
    46: "Palladium is used in catalytic converters, jewelry, and electronics. It is an excellent catalyst and is important in hydrogen fuel cells.",
    47: "Silver is an excellent conductor of heat and electricity and is used in jewelry, electronics, and photography. It has antimicrobial properties.",
    48: "Cadmium is toxic but is used in batteries and as a pigment. Exposure to cadmium can cause serious health problems including kidney damage.",
    49: "Indium is used in semiconductors and photovoltaic devices. It is important in touch screens and LCD displays.",
    50: "Tin is used in alloys, solders, and as a protective coating. It is essential in producing bronze and is used in food cans.",
    51: "Antimony is used in alloys and flame retardants. It is toxic and has been used in traditional medicine despite health risks.",
    52: "Tellurium is used in alloys, solar cells, and as a catalyst. It is important in thermoelectric devices and optical media.",
    53: "Iodine is essential for thyroid function and is used as a disinfectant. It is important in salt iodization and medical imaging.",
    54: "Xenon is a noble gas used in high-intensity discharge lamps and anesthesia. It is used in medical imaging and deep-sea diving mixtures.",
    55: "Cesium is used in atomic clocks, medical applications, and photoelectric devices. It is one of the most reactive metals.",
    56: "Barium is used in medical imaging (barium swallow), oil drilling, and as a pigment. It is toxic when soluble but safe when insoluble.",
    57: "Lanthanum is used in alloys, optical glass, and catalysts. It is the first of the lanthanide series.",
    58: "Cerium is used in catalytic converters, glass polishing powders, and alloys. It is the most abundant lanthanide.",
    59: "Praseodymium is used in alloys, magnets, and as a catalyst. It produces a characteristic yellow-green color in glass.",
    60: "Neodymium is essential for powerful permanent magnets used in motors and generators. It is important in wind turbines and electric vehicles.",
    61: "Promethium is radioactive and is used in atomic batteries and self-illuminating devices. It has no stable isotopes.",
    62: "Samarium is used in magnets, nuclear reactors, and as a catalyst. It is important in samarium-cobalt permanent magnets.",
    63: "Europium is used in red phosphors for television and lighting. It is essential for fluorescent lamps and LED displays.",
    64: "Gadolinium is used in MRI contrast agents and high-temperature alloys. It is important in medical imaging technology.",
    65: "Terbium is used in specialized alloys, as a dopant in fiber optics, and in phosphors. It is important in green phosphors for displays.",
    66: "Dysprosium is used in magnets and nuclear control rods. It is important in terbium alloys for high-temperature applications.",
    67: "Holmium is used in alloys and as a dopant in lasers. It is important in infrared absorbing glasses.",
    68: "Erbium is used in fiber optics amplifiers and as a dopant in laser crystals. It is important in telecommunications.",
    69: "Thulium is used in portable X-ray machines and as a dopant in fiber amplifiers. It is one of the rarest lanthanides.",
    70: "Ytterbium is used in alloys and as a dopant in laser crystals. It is important in stress gauges and precision instruments.",
    71: "Lutetium is used in PET scanners for medical imaging and as a dopant in crystals. It is the heaviest lanthanide.",
    72: "Hafnium is used in nuclear reactor control rods and high-temperature alloys. It is resistant to corrosion despite its similarity to zirconium.",
    73: "Tantalum is used in electronics, surgical implants, and alloys. It is highly resistant to corrosion and used in capacitors.",
    74: "Tungsten has the highest melting point of any element and is used in light bulbs and high-speed tools. It is important in cutting tools and armor plating.",
    75: "Rhenium is used in alloys for jet engines and as a catalyst. It has a very high melting point and boiling point.",
    76: "Osmium is the densest naturally occurring element and is used in alloys and catalysts. It is used in electrical contacts and specialized instruments.",
    77: "Iridium is used in alloys, spark plugs, and as a catalyst. It is highly resistant to corrosion and used in crucibles.",
    78: "Platinum is a precious metal used in jewelry, catalysts, and electronics. It is highly resistant to corrosion and used in laboratory equipment.",
    79: "Gold is a precious metal used in jewelry, electronics, and investment. It is highly valued for its beauty, rarity, and usefulness in conductivity.",
    80: "Mercury is the only liquid metal at room temperature. It is used in thermometers, barometers, and certain lamps but is toxic.",
    81: "Thallium is toxic and is used in electronics and infrared optics. It is being phased out due to health concerns.",
    82: "Lead is used in batteries, radiation shielding, and was historically used in gasoline. It is toxic and particularly harmful to children.",
    83: "Bismuth is used in alloys, pharmaceuticals, and cosmetics. It is less toxic than lead and is being used as a lead substitute.",
    84: "Polonium is highly radioactive and is used in specialized applications. It is extremely toxic and requires special handling.",
    85: "Astatine is extremely rare and highly radioactive. It has no practical applications due to its instability.",
    86: "Radon is a radioactive noble gas produced by uranium decay. It can accumulate in buildings and is a health hazard.",
    87: "Francium is the most reactive of all elements and is extremely rare. It has no practical applications due to its extreme instability.",
    88: "Radium is highly radioactive and glows in the dark. It was used in clock dials before the health dangers were recognized.",
    89: "Actinium is highly radioactive and is used in nuclear research. It is produced from uranium and thorium decay.",
    90: "Thorium is radioactive but is less toxic than uranium. It is used in nuclear fuel and as a catalyst.",
    91: "Protactinium is highly radioactive and extremely rare. It has limited applications due to its extreme toxicity and rarity.",
    92: "Uranium is the heaviest naturally occurring element and is used as nuclear fuel. It is radioactive with a very long half-life.",
    93: "Neptunium is highly radioactive and is produced artificially. It has no practical applications and is extremely toxic.",
    94: "Plutonium is highly radioactive and is used in nuclear weapons and reactors. It is one of the most toxic substances known.",
    95: "Americium is radioactive and is used in smoke detectors and neutron sources. It is produced artificially from plutonium.",
    96: "Curium is highly radioactive and is used in medical applications and space probes. It is named after Marie Curie.",
    97: "Berkelium is radioactive and has limited applications. It is named after Berkeley, California where it was discovered.",
    98: "Californium is radioactive and is used in neutron sources and medical applications. It is named after California and the element californium.",
    99: "Einsteinium is highly radioactive and is named after Albert Einstein. It has no practical applications.",
    100: "Fermium is highly radioactive and is named after Enrico Fermi. It is produced in minute quantities.",
    101: "Mendelevium is highly radioactive and is named after Dmitri Mendeleev. It has no practical applications.",
    102: "Nobelium is highly radioactive and is named after Alfred Nobel. It has extremely limited applications.",
    103: "Lawrencium is highly radioactive and is named after Ernest Lawrence. It is produced in accelerators.",
    104: "Rutherfordium is highly radioactive and is a synthetic element. It has no practical applications.",
    105: "Dubnium is highly radioactive and is named after Dubna, Russia. It is produced in particle accelerators.",
    106: "Seaborgium is highly radioactive and is named after Glenn T. Seaborg. It has no practical applications.",
    107: "Bohrium is highly radioactive and is named after Niels Bohr. It is produced in specialized laboratories.",
    108: "Hassium is highly radioactive and is named after Hesse, Germany. It has no practical applications.",
    109: "Meitnerium is highly radioactive and is named after Lise Meitner. It has extremely limited applications.",
    110: "Darmstadtium is highly radioactive and is named after Darmstadt, Germany. It is produced in accelerators.",
    111: "Roentgenium is highly radioactive and is named after Wilhelm Röntgen. It has no practical applications.",
    112: "Copernicium is highly radioactive and is named after Nicolaus Copernicus. It has no practical applications.",
    113: "Nihonium is highly radioactive and is named after Nihon (Japan). It has no practical applications.",
    114: "Flerovium is highly radioactive and is named after Flerov, Russia. It has no practical applications.",
    115: "Moscovium is highly radioactive and is named after Moscow, Russia. It has no practical applications.",
    116: "Livermorium is highly radioactive and is named after Livermore, California. It has no practical applications.",
    117: "Tennessine is highly radioactive and is named after Tennessee. It has no practical applications.",
    118: "Oganesson is the newest officially named element and is highly radioactive. It is the most unstable and heaviest element."
};

// Render the periodic table
function renderPeriodicTable() {
    periodicTable.innerHTML = '';
    filteredElements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category}`;
        elementDiv.innerHTML = `
            <div class="element-number">${element.number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
            <div class="element-mass">${element.mass}</div>
        `;
        elementDiv.addEventListener('click', () => showElementDetails(element));
        periodicTable.appendChild(elementDiv);
    });
}

// Show element details in modal
function showElementDetails(element) {
    const description = elementDescriptions[element.number] || 'No description available.';
    
    elementDetails.innerHTML = `
        <div class="element-detail-header">
            <div class="element-large" style="background: ${getElementColor(element.category)}; color: white; border-radius: 10px;">
                ${element.symbol}
            </div>
            <div class="element-title">
                <h2>${element.name}</h2>
                <p>Atomic Number: ${element.number}</p>
            </div>
        </div>
        
        <div style="margin-bottom: 20px; padding: 15px; background: #f0f0f0; border-radius: 8px;">
            <h3 style="margin-bottom: 10px; color: #333;">Description</h3>
            <p style="line-height: 1.6; color: #555; font-size: 0.95em;">${description}</p>
        </div>
        
        <div class="element-properties">
            <div class="property">
                <div class="property-label">Atomic Mass</div>
                <div class="property-value">${element.mass} u</div>
            </div>
            <div class="property">
                <div class="property-label">Category</div>
                <div class="property-value">${element.category.replace('-', ' ').charAt(0).toUpperCase() + element.category.replace('-', ' ').slice(1)}</div>
            </div>
            <div class="property">
                <div class="property-label">Electron Configuration</div>
                <div class="property-value">${element.electronConfig}</div>
            </div>
            <div class="property">
                <div class="property-label">Oxidation States</div>
                <div class="property-value">${element.oxidationStates}</div>
            </div>
            <div class="property">
                <div class="property-label">Boiling Point (°C)</div>
                <div class="property-value">${element.boiling}</div>
            </div>
            <div class="property">
                <div class="property-label">Melting Point (°C)</div>
                <div class="property-value">${element.melting}</div>
            </div>
            <div class="property">
                <div class="property-label">Density (g/cm³)</div>
                <div class="property-value">${element.density}</div>
            </div>
        </div>
    `;
    modal.classList.add('show');
    
    // Log to console
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Element: ${element.name} (${element.symbol})`);
    console.log(`${'='.repeat(50)}`);
    console.log(`Atomic Number: ${element.number}`);
    console.log(`Atomic Mass: ${element.mass} u`);
    console.log(`Category: ${element.category}`);
    console.log(`Electron Configuration: ${element.electronConfig}`);
    console.log(`Oxidation States: ${element.oxidationStates}`);
    console.log(`Boiling Point: ${element.boiling}°C`);
    console.log(`Melting Point: ${element.melting}°C`);
    console.log(`Density: ${element.density} g/cm³`);
    console.log(`\nDescription:\n${description}`);
    console.log(`${'='.repeat(50)}\n`);
}

// Get color based on category
function getElementColor(category) {
    const colors = {
        'nonmetal': '#7cb342',
        'noble-gas': '#ab47bc',
        'alkali-metal': '#ffb74d',
        'alkaline-earth-metal': '#ffd54f',
        'metalloid': '#4db6ac',
        'halogen': '#29b6f6',
        'transition-metal': '#ef5350',
        'lanthanide': '#ce93d8',
        'actinide': '#90caf9',
        'post-transition-metal': '#80cbc4'
    };
    return colors[category] || '#999';
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filteredElements = allElements.filter(element => 
        element.name.toLowerCase().includes(searchTerm) ||
        element.symbol.toLowerCase().includes(searchTerm) ||
        element.number.toString().includes(searchTerm)
    );
    renderPeriodicTable();
});

// Category filter
categoryFilter.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === '') {
        filteredElements = [...allElements];
    } else {
        filteredElements = allElements.filter(element => element.category === selectedCategory);
    }
    renderPeriodicTable();
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Initial render
renderPeriodicTable();
