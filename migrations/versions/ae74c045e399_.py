"""empty message

Revision ID: ae74c045e399
Revises: 
Create Date: 2023-05-04 22:56:21.003634

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ae74c045e399'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('parts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('model', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('link', sa.String(), nullable=False),
    sa.Column('size', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('lastname', sa.String(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('size', sa.String(), nullable=False),
    sa.Column('weight', sa.String(), nullable=False),
    sa.Column('bike_type', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('favorites_parts',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('parts_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['parts_id'], ['parts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'parts_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorites_parts')
    op.drop_table('user')
    op.drop_table('parts')
    # ### end Alembic commands ###