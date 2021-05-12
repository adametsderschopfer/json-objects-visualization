import { IFullScreenLoader, JOVConstructor } from "./interfaces";
import Services from "./services"

namespace JOV {
    export class Drawer {
        public readonly ctx: CanvasRenderingContext2D | null;
        public targetReference: object = {};
        public readonly loader: IFullScreenLoader = new Services.FullScreenLoader();

        constructor(public readonly args: JOVConstructor) {
            if (!args.canvas) {
                throw new SyntaxError("canvas is required argument");
            }
            else if (!(args.canvas instanceof HTMLCanvasElement)) {
                throw new SyntaxError("canvas must be of type HTMLCanvasElement");
            }

            if (!args.target) {
                throw new SyntaxError("target object is required argument");
            }

            /* INIT */

            this.ctx = args.canvas.getContext("2d");
            this.init();
        }

        loop() { }

        draw() { }

        init(): boolean {

        }
    }

    export function create(args: JOVConstructor) { return new Drawer(args) }
}

export default JOV