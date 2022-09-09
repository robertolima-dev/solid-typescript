export default class Uber {

    username: string
    from: string
    to: string

    constructor(username: string, from: string, to: string) {
        this.username = username
        this.from = from
        this.to = to
    }

    startPath(): void {
        console.log(`O => Iniciando a corrida!`)
    }

    configure(): void {
        console.log(`O => Levar o user ${this.username}, do ponto ${this.from} até o ponto ${this.to}`)
        this.startPath()
    }
}