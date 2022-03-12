import { TraceUnits } from 'meteor/igoandtrace:trace-units-collection';

Meteor.methods({

  newEntry(json) {
    const query = {
      name: json.bu,
    };

    if (TraceUnits.findOne(query)) {
      throw new Meteor.Error('duplicate-name', TAPi18n.__('duplicate_name'));
    }

    return TraceUnits.insert(json);
  },

  editEntry(json) {
    return TraceUnits.update({ _id: json._id }, {$set:json});
  },

  deleteEntry(entryId) {
    return TraceUnits.remove({ _id: entryId });
  },
});
