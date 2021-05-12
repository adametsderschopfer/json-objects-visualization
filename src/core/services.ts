import { IFullScreenLoader } from "../core/interfaces";

namespace Services {
	export class FullScreenLoader implements IFullScreenLoader {
		constructor(protected readonly templateLoader: string = '') {
			this.templateLoader = `
				<div class="JOV-loader">
					
				</div>
			`;
		}

		disable(): void {

		}

		enable(): void {

		}
	}
}

export default Services;
