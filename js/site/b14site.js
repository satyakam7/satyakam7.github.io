/**
 * The core namespace.
 *
 * @namespace b14
 */
this.b14site = this.b14site || {};

/** @lends b14site */
(function (ns, root) {
  "use strict";

  /**
   * Get namespace.
   *
   * It seperates on . (dot), so "utils.number" will create or get (if it
   * exists already) the b14site.utils.number namespace.
   *
   * @memberof b14site
   *
   * @param  {String} ns_string
   *   The name of the namespace, without b14site.
   * @param  {Object} [namespace]
   *   The parent namespace. This will default to the b14site namespace.
   *
   * @return {Object}
   *   The reference to the new namespace.
   */
  ns.getNamespace = function (ns_string, namespace) {
    var
      parts = ns_string.split('.'),
      i = 0;

    // Use b14site as the default namespace.
    if (namespace === undefined) {
      namespace = ns;
    }

    // Run through all the parts, and create them if they don't exist.
    for (i in parts) {
      namespace[parts[i]] = namespace[parts[i]] || {};
      namespace = namespace[parts[i]];
    }

    return namespace;
  };

})(this.b14site, this);
