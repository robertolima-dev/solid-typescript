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
        console.log(`Iniciando a corrida!`)
    }

    configure(): void {
        console.log(`Levar o user ${this.username}, do ponto ${this.from} até o ponto ${this.to}`)
        this.startPath()
    }

}