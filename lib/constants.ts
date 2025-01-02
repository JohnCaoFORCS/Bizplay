export enum VIEW {
    RECEIPT_TABLE = "receipt-table",
    RESOLUTION_TABLE = "resolution-table",
    MANAGE_DEPARTMENTS = "manage-departments",
    MANAGE_USERS = "manage-users",
    MANAGE_CARDS = "manage-cards",
    MANAGE_RECEIPTS = "manage-receipts",
    MANAGE_COMPANIES = "manage-companies",
    APPROVER_RESOLUTION_TABLE = "approver-resolution-table",
    APPROVER_REPORT_VIEW = "approver-report-view",
}

export enum DIALOG_TYPE {
    RECEIPT_EDIT = "receipt-edit",
    RECEIPT_VIEW = "receipt-view",
    RESOLUTION_EDIT = "resolution-edit",
    RESOLUTION_VIEW = "resolution-view",
    DEPARTMENT_EDIT = "department-edit",
    DEPARTMENT_VIEW = "department-view",
    USER_EDIT = "user-edit",
    USER_VIEW = "user-view",
    CARD_EDIT = "card-edit",
    CARD_VIEW = "card-view",
    COMPANY_EDIT = "company-edit",
    COMPANY_VIEW = "company-view",
}

export enum ROLE {
    USER = "ROLE_USER",
    MANAGER = "ROLE_MANAGER",
    APPROVER = "ROLE_APPROVER",
}
