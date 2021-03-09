import { User, UserManager, UserManagerSettings } from "oidc-client";

export class OidcCustomEventInit<T> implements CustomEventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: T;
}

export function createOidcCustomEvent<T>(
  eventName: string,
  params: OidcCustomEventInit<T>
) {
  const prefixedEventName = "oidc:" + eventName;
  const bubbles = params.bubbles ?? false;
  const cancelable = params.cancelable ?? false;
  const event: CustomEvent<T | undefined> = document.createEvent("CustomEvent");

  event.initCustomEvent(prefixedEventName, bubbles, cancelable, params.detail);
  return event;
}

export function dispatchCustomBrowserEvent<T>(
  eventName: string,
  params: OidcCustomEventInit<T>
) {
  if (window) {
    window.dispatchEvent(createOidcCustomEvent(eventName, params));
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function firstLetterUppercase(string: string) {
  return string && string.length > 0
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : "";
}

function xyz(user: User) {
  const userManagerSettings: UserManagerSettings = {
    authority: "",
    accessTokenExpiringNotificationTime: 120,
  };

  const manager = new UserManager(userManagerSettings);
  // manager.events.addUserLoaded(xyz)
  window.console.log(user);
  window.console.log(manager.settings.display);
}

export function addUserManagerEventListener(
  oidcUserManager: UserManager,
  eventName: string,
  eventListener: Function
) {
  // const addFnName = 'add' + firstLetterUppercase(eventName)
  oidcUserManager.events.addUserLoaded(xyz);
  window.console.log(eventName + " " + eventListener);

  // if (typeof oidcUserManager.events[addFnName] === 'function' && typeof eventListener === 'function') {
  //   oidcUserManager.events[addFnName](eventListener)
  // }
}
