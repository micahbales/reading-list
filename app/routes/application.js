import Ember from 'ember';
import db from '../utils/db';

export default Ember.Route.extend({
  model() {
    return db.books();
  }
});
