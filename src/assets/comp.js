class Comp {
  get version() {
  	return 0.2;
  }

  constructor(selector) {
    let _selector;

    switch (typeof selector) {
      case "string":
        _selector = document.querySelectorAll(selector);
        break;
      case "object":
        _selector = (typeof selector.length === "undefined") ? [ selector ] : selector;
        break;
      default:
        throw new TypeError(this.constructor.name + " - błędny selektor: " + selector);
    }

    this.length = _selector.length;
    Object.assign(this, _selector);
  }

  test(condition, error, element) {
    if(condition) {
      throw error;
    }
    return element;
  }

  addClass(classList) {
    let len = this.length;
    this.test(typeof classList !== "string", new TypeError("Do metody addClass został przekazany argument niebędący ciągiem znaków, przekazany argument to: " + classList));

    while(len--) {
      this[len].classList.add(...classList.split(" "));
    }

    return this;
  };

  removeClass(classList) {
    let len = this.length;
    this.test(typeof classList !== "string", new TypeError("Do metody removeClass został przekazany argument niebędący ciągiem znaków, przekazany argument to: " + classList));

    while(len--) {
      this[len].classList.remove(...classList.split(" "));
    }

    return this;
  };

  on(type, callback) {
    let len = this.length;
    this.test(typeof type !== "string", new TypeError("Do metody on został przekazany argument niebędący ciągiem znaków, przekazany argument to: " + type));
    this.test(typeof callback !== "function", new TypeError("Do metody on został przekazany argument niebędący funkcją, przekazany argument to: " + callback));

    while(len--) {
      this[len].addEventListener(type, callback);
    }

    return this;
  };

  html(html) {
    let len = this.length;

    if(html) {
      this.test(typeof html !== "string", new TypeError("Do metody html został przekazany argument niebędący ciągiem znaków, przekazany argument to: " + html));
      while(len--) {
        this[len].innerHTML = html;
      }
    } else {
      this.test(html.length > 1, new TypeError("Do metody html został przekazany argument zawierający więcej niż jeden element, przekazany argument to: " + html));
      return this[0].innerHTML;
    }

    return this;
  }

  index() {
    let parent = this[0].parentElement,
        len = parent.children.length,
        index = -1;

    this.test(this.length > 1, new TypeError("Wywołano metodę index na obiekcie posiadającym więcej niż jeden element."));

    while(len--) {
      if (parent.children[len] === this[0]) index = len;
    }

    return index;
  }

  foreach(callback) {
    for(let i = 0; i < this.length; i++) {
      callback.apply(this[i]);
    }

    return this;
  }

  ajax(settings) {
    let request = new XMLHttpRequest(),
        type = this.test(typeof settings.type !== "string", new TypeError("Do metody ajax został przekazany argument niebędący ciągiem znaków, przekazany argument to: " + settings.type), settings.type),
        url = this.test(typeof settings.url !== "string", new TypeError("Do metody ajax został przekazany argument niebędący ciągiem znaków, przekazany argument to: " + settings.url), settings.url),
        data = settings.data,
        success = (settings.success) ? this.test(typeof settings.success !== "function", new TypeError("Do metody ajax został przekazany argument niebędący funkcją, przekazany argument to: " + settings.success), settings.success) : () => {},
        error = (settings.error) ? this.test(typeof settings.error !== "function", new TypeError("Do metody ajax został przekazany argument niebędący funkcją, przekazany argument to: " + settings.error), settings.error) : () => {};

    if (type === "GET") {
      if(!url) throw new TypeError(this.ajax.name + " - adres do pobrania danych jest wymagany");

      request.open(type, url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          success(request.responseText);
        } else {
          console.warn("Podany adres serwera zwraca błąd");
          error();
        }
      };

      request.onerror = function() {
        error();
      };

      request.send();
    } else if (type === "POST") {
      if(!url) throw new TypeError(this.ajax.name + " - adres do wysłania danych jest wymagany");
      if(!data) throw new TypeError(this.ajax.name + " - dane do wysłania są wymagane");

      request.open(type, url, true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.send(data);
    }

    return this;
  }
}
