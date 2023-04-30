import {Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {BmxZoomifyImage} from "./interface/bmx-zoomify-image";
import {DOCUMENT} from "@angular/common";

@Component({
	selector: 'bmx-zoomify',
	templateUrl: './bmx-zoomify.component.html',
	styleUrls: ['./bmx-zoomify.component.css']
})
export class BmxZoomifyComponent implements OnInit {

	@Input()
	public src: BmxZoomifyImage = {
		url: '',
		altText: ''
	};
	@ViewChild('zoomDiv') zoomDiv: ElementRef = {} as ElementRef;

	constructor(
		@Inject(DOCUMENT) private _document: Document,
		private _renderer: Renderer2
	) {
	}

	ngOnInit(): void {
	}

	public zoom(e: MouseEvent): void {
		if(e.currentTarget === null)
			return;

		let imgElement: HTMLImageElement = e.currentTarget as HTMLImageElement;

		if(screen.width > 759) {
			const { offsetX, offsetY } = e;
			const offsetWidth = imgElement.offsetWidth;
			const offsetHeight = imgElement.offsetHeight;
			const x = offsetX / offsetWidth * 100;
			const y = offsetY / offsetHeight * 100;
			const pos = `${x}% ${y}%`;
			this._renderer.setStyle(imgElement, "background-position", pos);

			if (this.src) {
				this._renderer.setStyle(
					this.zoomDiv.nativeElement,
					"background-image",
					`url(${this.src.url})`
				);
			}
		}
	}

	public zoomOut(): void {
		this._renderer.setStyle(
			this.zoomDiv.nativeElement,
			"background-image",
			`url()`
		);
	}
}
