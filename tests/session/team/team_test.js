'use strict';

var chai = require('chai');
var expect = chai.expect;
var Team = require('../../../lib/session/team');

/**
 * Verify the Team class behaves as expected.
 */
describe('session/team', function() {
    it('Should be empty when when constructed', function() {
        const TestDescription = { direction: { x: 0, y: 0, z: 0 } };
        const team = new Team(TestDescription);

        expect(team.direction).to.equal(TestDescription.direction);
        expect(team.towers.length).to.equal(0);
        expect(team.units.length).to.equal(0);
    });
});
