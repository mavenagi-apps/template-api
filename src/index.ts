export default {
  async preInstall({
    organizationId: _organizationId,
    agentId: _agentId,
    settings: _settings,
  }: {
    organizationId: string
    agentId: string
    settings: AppSettings
  }) {},

  async postInstall({
    organizationId: _organizationId,
    agentId: _agentId,
    settings: _settings,
  }: {
    organizationId: string
    agentId: string
    settings: AppSettings
  }) {},

  async executeAction({
    organizationId: _organizationId,
    agentId: _agentId,
    actionId: _actionId,
    parameters: _parameters,
    user: _user,
  }: {
    organizationId: string
    agentId: string
    actionId: string
    parameters: Record<string, unknown>
    user: unknown
  }) {},
}
