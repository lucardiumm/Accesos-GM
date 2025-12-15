export type Socio = {
    ns: string,
    doc: number,
    nc: string,
    vto: string,
}

export type Sede = {
    name: string;
}

export type SedeContextType = {
    sede: string;
    hasEntered: boolean;
    empresa: string;
    changeSede: (name: string, empresa: string) => void;
    setHasEntered: (value: boolean) => void;
}