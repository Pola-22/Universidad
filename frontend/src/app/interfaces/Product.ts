export interface Product{
    productoID?: number,
    usuarioID: number,
    nombre: string,
    descripcion: string,
    precio: number,
    cantidadDisponible: number,
    imagen?: string
}