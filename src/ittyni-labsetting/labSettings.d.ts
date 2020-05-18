type LaboSettingDepartementName = string

interface LaboSettingDepartement {
    name : LaboSettingDepartementName
}

interface LaboSetting {
    departements : LaboSettingDepartement[]
}