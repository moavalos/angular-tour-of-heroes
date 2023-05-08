import { Observable } from "rxjs"
import { Hero } from "src/app/dominio/modelo/hero"

export default interface IDisplayHeroDetail {

    hero: Hero

    askHeroDetail(id: number): Observable<void>
    askHeroNameChange(newHeroName: string): Observable<void>
}