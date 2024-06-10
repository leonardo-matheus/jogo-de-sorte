const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
});

const User = require('./user')(sequelize, DataTypes);
const Raffle = require('./raffle')(sequelize, DataTypes);
const Ticket = require('./ticket')(sequelize, DataTypes);
const Transaction = require('./transaction')(sequelize, DataTypes);
const Affiliate = require('./affiliate')(sequelize, DataTypes);
const Partner = require('./partner')(sequelize, DataTypes);

User.hasMany(Raffle, { foreignKey: 'owner_id' });
Raffle.belongsTo(User, { foreignKey: 'owner_id' });

Raffle.hasMany(Ticket, { foreignKey: 'raffle_id' });
Ticket.belongsTo(Raffle, { foreignKey: 'raffle_id' });
Ticket.belongsTo(User, { foreignKey: 'customer_id' });

User.hasMany(Transaction, { foreignKey: 'user_id' });
Transaction.belongsTo(User, { foreignKey: 'user_id' });
Transaction.belongsTo(Raffle, { foreignKey: 'raffle_id' });

Raffle.belongsToMany(User, { through: Affiliate, foreignKey: 'raffle_id' });
User.belongsToMany(Raffle, { through: Affiliate, foreignKey: 'affiliate_user_id' });

User.hasMany(Partner, { foreignKey: 'partner_user_id' });

sequelize.sync();

module.exports = {
  sequelize,
  User,
  Raffle,
  Ticket,
  Transaction,
  Affiliate,
  Partner
};
