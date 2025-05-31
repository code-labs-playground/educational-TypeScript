interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
    status: ContractStatus
}

enum ContractStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1990"),
    id: 12345,
    name: "Jamie Johnson",
    status: ContractStatus.Active
}

type ContactName = string
