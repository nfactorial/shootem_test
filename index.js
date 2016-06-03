// Ensure .env file is used if present
require('dotenv').config();

const Factory = require('@nfactorial/factory_node');

const ScriptServer = require('@nfactorial/playcanvas_server').ScriptServer;
const GameServer = require('@nfactorial/playcanvas_server').GameServer;

const scripts = new ScriptServer();
const game = new GameServer();


/**
 * Create factory object for game systems
 * TODO: Make this build from a json file?
 */
const systemFactory = new Factory();

systemFactory.register('MatchWaiting', require('./lib/game_systems/match_waiting'));
systemFactory.register('TeamManager', require('./lib/game_systems/team_manager'));

game.expressServer.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

/**
 * Prepare the server and begin processing
 */
scripts.run(__dirname, '/development');
game.run(9000);
