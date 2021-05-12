export {};

declare global {
	interface Window {
		JOV: ICore;
	}
}

/*
* FullScreenLoader => /services/FullScreenLoader.ts
* */
export interface IFullScreenLoader {
	enable: () => void;
	disable: () => void;
}

export interface ICFullScreenLoader {
	new(): IFullScreenLoader
}

export interface ICore { }

export interface ICoreConstructor {
	new(args: JOVConstructor): ICore;
}

export type JOVConstructor = {
	canvas: HTMLCanvasElement,
	target: object | string,
	options?: object
}