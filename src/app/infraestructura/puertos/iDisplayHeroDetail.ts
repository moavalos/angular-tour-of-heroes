import { Observable } from "rxjs"
import { Hero } from "../dominio/modelo/hero"

// en el puerto, iran interfaces que definen metodos para abtraerse 
export default interface IDisplayHeroDetail {

    hero: Hero

    askHeroDetail(id: number): Observable<void>
    askHeroNameChange(newHeroName: string): Observable<void>
}