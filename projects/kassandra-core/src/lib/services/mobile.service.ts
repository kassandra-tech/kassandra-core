import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlatformService } from "./platform.service";

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  private isMobile: boolean = this.platformService.isPlatformBrowser() ? window.innerWidth < 1024 : true;
  private mobileSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isMobile);
  public isMobile$: Observable<boolean> = this.mobileSource.asObservable();

  private height: number = this.platformService.isPlatformBrowser() ? window.innerHeight : 0;
  private heightSource: BehaviorSubject<number> = new BehaviorSubject<number>(this.height);
  public height$: Observable<number> = this.heightSource.asObservable();

  constructor(
    private platformService: PlatformService
  ) {
    if (this.platformService.isPlatformBrowser()) {
      window.addEventListener('resize', () => {
        if (this.isMobile !== window.innerWidth < 1024) {
          this.isMobile = window.innerWidth < 1024;
          this.setMobile(this.isMobile);
        }
        if (this.height !== window.innerHeight) {
          this.height = window.innerHeight;
          this.setHeight(this.height);
        }
      });
      this.setMobile(this.isMobile);
      this.setHeight(this.height);
    }
  }

  // @HostListener('window:resize', ['$event'])
  // private resizeHandler() {
  //
  // }

  private setMobile(flag: boolean) {
    this.mobileSource.next(flag);
  }

  private setHeight(height: number) {
    this.heightSource.next(height);
  }

}
