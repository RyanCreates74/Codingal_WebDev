const fs = require("fs");
const readline = require("readline");

const FILE_PATH = "phonebook.json";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let phonebook = {};
if (fs.existsSync(FILE_PATH)) {
    try {
        const data = fs.readFileSync(FILE_PATH, "utf8");
        phonebook = JSON.parse(data);
    } catch (err) {
        console.log("Error reading phonebook file. Starting with an empty phonebook.");
        phonebook = {};
    }
}

function savePhonebook() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(phonebook, null, 2), "utf8");
}

console.log("Welcome to My Advanced Phonebook App!");

function showMenu() {
    console.log("\n--- Phonebook Menu ---");
    console.log("1. Add a Contact");
    console.log("2. Search a Contact");
    console.log("3. Delete a Contact");
    console.log("4. View All Contacts");
    console.log("5. Exit");

    rl.question("\nChoose an option (1-5): ", handleMenuSelection);
}

function handleMenuSelection(choice) {
    switch (choice.trim()) {
        case '1':
            addContact();
            break;
        case '2':
            searchContact();
            break;
        case '3':
            deleteContact();
            break;
        case '4':
            viewAll();
            break;
        case '5':
            console.log("Exiting Phonebook. Goodbye!");
            rl.close;
            break;
        default:
            console.log("Invalid choice. Please enter a number 1-5.");
            break;
    }
}

function addContact() {
    rl.question("Enter Name: ", (name) => {
        const trimmedName = name.trim();
        if (trimmedName === "") {
            console.log("Name cannot be empty.");
            return showMenu();
        }
        rl.question("Enter Phone Number: ", (number) => {
            rl.question("Enter Email: ", (email) => {
                rl.question("Enter Address: ", (address) => {
                    const id = "ID_" + Date.now().toString(36);

                    phonebook[id] = {
                        id: id,
                        name: trimmedName,
                        phone: number.trim() || "N/A",
                        email: email.trim() || "N/A",
                        address: address.trim() || "N/A",
                    };
                    savePhonebook();
                    console.log(`\n${trimmedName} has been added successfully! (Assigned ID: ${id})`)
                });
            });
        });
    });
}

function searchContact() {
    rl.question("Enter Name or ID to search: ", (query) => {
        const trimmedQuery = query.trim().toLowerCase();
        if (trimmedQuery === "") {
            console.log("Search query cannot be empty.");
            return showMenu();
        }
        const results = Object.values(phonebook).filter(contact =>
            contact.id.toLowerCase() === trimmedQuery ||
            contact.name.toLowerCase().includes(trimmedQuery)
        );
        if (results.length > 0) {
            console.log(`\nFound ${results.length} matching contact(s):`);
            results.forEach((contact, index) => {
                console.log(`${index + 1}. ID: ${contact.id}`);
                console.log(`   Name   : ${contact.name}`);
                console.log(`   Phone  : ${contact.phone}`);
                console.log(`   Email  : ${contact.email}`);
                console.log(`   Address: ${contact.address}`);
                console.log("----------------------------------------------");
            });
        } else {
            console.log(`No contacts found matching "${query}".`);
        }
        showMenu();
    })
}

function deleteContact() {
    rl.question("Enter Name or ID to Delete: ", (query) => {
        const trimmedQuery = query.trim().toLowerCase();

        if (trimmedQuery === "") {
            console.log("Query cannot be empty.");
            return showMenu();
        }

        // Find matches by ID or partial name
        const matches = Object.entries(phonebook).filter(([id, contact]) =>
            id.toLowerCase() === trimmedQuery ||
            contact.name.toLowerCase().includes(trimmedQuery)
        );

        if (matches.length === 0) {
            console.log(`No contacts found matching "${query}".`);
        } else if (matches.length === 1) {
            const [id, contact] = matches[0];
            delete phonebook[id];
            savePhonebook();
            console.log(`Contact "${contact.name}" (ID: ${id}) has been deleted.`);
        } else {
            console.log(`\nMultiple matches found for "${query}". Please use the specific ID to delete:`);
            matches.forEach(([id, contact]) => {
                console.log(`- ID: ${id} | Name: ${contact.name}`);
            });
        }
        showMenu();
    });
}

function viewAll() {
    const entries = Object.entries(phonebook);

    if (entries.length === 0) {
        console.log("The phonebook is completely empty.");
    } else {
        console.log("\n================ ALL CONTACTS ================");
        entries.forEach(([id, contact], index) => {
            console.log(`${index + 1}. ID: ${id}`);
            console.log(`   Name   : ${contact.name}`);
            console.log(`   Phone  : ${contact.phone}`);
            console.log(`   Email  : ${contact.email}`);
            console.log(`   Address: ${contact.address}`);
            console.log("----------------------------------------------");
        });
    }
    showMenu();
}

showMenu();