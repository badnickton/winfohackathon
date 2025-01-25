export type Node = {
    kind: "factory" | "warehouse" | "endpoint",
    address: string,
    name: string
}

export type Edge = {
    distance: number,
    time: number,
    emission: number
}