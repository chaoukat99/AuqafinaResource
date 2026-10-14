// Turn the Région field into a dropdown for France and Spain,
// and back into a free-text input for every other country.

const REGION_OPTIONS = {
    FR: ["North", "South"],
    ES: ["East", "Ouest"],
};

const country = document.getElementById("country_code");
const regionId = "00Nak00005GjudP";

// Keep the original text input so we can put it back later.
const textInput = document.getElementById(regionId);

function updateRegion() {
    const current = document.getElementById(regionId);
    const options = REGION_OPTIONS[country.value];

    if (!options) {
        if (current !== textInput) {
            textInput.value = "";
            current.replaceWith(textInput);
        }
        return;
    }

    const select = document.createElement("select");
    select.id = regionId;
    select.name = regionId; // same name so Salesforce still receives it

    select.add(new Option("- Aucun -", ""));
    options.forEach((value) => select.add(new Option(value, value)));

    current.replaceWith(select);
}

country.addEventListener("change", updateRegion);
updateRegion();
